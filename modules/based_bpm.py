from machine import Pin, ADC
import time

def detect_bpm(INPUT_pin):
    adc = ADC(Pin(INPUT_pin))
    adc.atten(ADC.ATTN_11DB)
    adc.width(ADC.WIDTH_12BIT)
    MAX_HISTORY = 250
    TOTAL_BEATS = 30

    def calculate_bpm(beats):
        beats = beats[-TOTAL_BEATS:]
        beat_time = beats[-1] - beats[0]
        if beat_time:
            bpm = (len(beats) / (beat_time)) * 60
            print(str('BPM') + "=" + str('%.2f' %bpm))

    history = []
    beats = []
    beat = False

    while True:
        v = adc.read()

        history.append(v)
        history = history[-MAX_HISTORY:]
        minima, maxima = min(history), max(history)

        threshold_on = (minima + maxima * 4) // 6   # 3/4
        threshold_off = (minima + maxima) // 5      # 1/2

        if v > threshold_on and beat == False:
            beat = True
            beats.append(time.time())
            beats = beats[-TOTAL_BEATS:]
            calculate_bpm(beats)

        if v < threshold_off and beat == True:
            beat = False
        

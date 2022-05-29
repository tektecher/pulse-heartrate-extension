Blockly.defineBlocksWithJsonArray([
{
  "type": "heart_rate_PIN",
  "message0": "Set Heart-rate sensor PIN %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
      [
          "IN6",
          "33"
      ],
      [
          "IN7",
          "32"
      ],
      [
          "IN8",
          "35"
      ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "push_based",
  "message0": "Data signal heart rate",
  "output": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "heart_rate_bpm",
  "message0": "Show Heart rate bpm",
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "Detecting_a_beat",
  "message0": "Detecting Heart Beat OUTPUT PIN %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
      [
          "OUT1",
          "14"
      ],
      [
          "OUT2",
          "26"
      ],
      [
          "OUT3",
          "2"
      ],
      [
          "OUT4",
          "27"
      ],
      [
          "OUT5",
          "25"
      ],
      [
          "OUT6",
          "33"
      ],
      [
          "OUT7",
          "32"
      ],
      [
          "OUT9",
          "4"
      ],
      [
          "OUT10",
          "5"
      ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
]);

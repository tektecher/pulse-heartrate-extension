Blockly.Python['heart_rate_PIN'] = function(block) {
  Blockly.Python.definitions_['import_based_bpm'] = 'import based_bpm';
  Blockly.Python.definitions_['import_based'] = 'import based_detect';
  Blockly.Python.definitions_['from_machine'] = 'import machine';

  var dropdown_value = block.getFieldValue('value');

  var code = `heart_rate_pin = ${dropdown_value}\n`;
  return code;
};

Blockly.Python['push_based'] = function (block) {
 
  var code = 'based_detect.push_based(heart_rate_pin)';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['Detecting_a_beat'] = function (block) {
 
  var dropdown_value = block.getFieldValue('value');

  var code = `based_detect.Detect_beat(heart_rate_pin,${dropdown_value})\n`;
  return code;
};

Blockly.Python['heart_rate_bpm'] = function (block) {
 
  var code = `based_bpm.detect_bpm(heart_rate_pin)\n`;
  return code;
};
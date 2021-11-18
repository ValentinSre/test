use wasm_bindgen::prelude::*;

// take two integer values and return a + b
#[wasm_bindgen]
pub fn call_me_from_javascript(a: i32, b: i32) -> i32 {
  return a + b;
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// js alert
#[wasm_bindgen]
pub fn alert_window() {
    alert("Hello World!");
}

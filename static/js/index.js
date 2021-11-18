import init from "/static/js/worker.sql-wasm.js";

const worker = new Worker("/static/js/worker.sql-wasm.js");
  worker.onmessage = () => {
    console.log("Database opened");
    worker.onmessage = event => {
      console.log(event.data); // The result of the query
    };

    worker.postMessage({
      id: 2,
      action: "exec",
      sql: "SELECT age,name FROM test WHERE id=$id",
      params: { "$id": 1 }
    });
  };

  worker.onerror = e => console.log("Worker error: ", e);
  worker.postMessage({
    id:1,
    action:"open",
    buffer:buf, /*Optional. An ArrayBuffer representing an SQLite Database file*/
  });

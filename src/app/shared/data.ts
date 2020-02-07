const DATA = {
    "pages" : {
      "page_test" : {
        "hierarchy" : "guest",
        "key" : "-LhTU5DCF_vGFK5sI0ue",
        "name" : "page_test",
        "order" : 1,
        "value" : {
          "body" : {
            "render" : [ {
              "accessibility" : "value",
              "type" : "text",
              "value" : {
                "header" : "Header da tela",
                "text" : "Subtitulo da tela lorem ipsum lorem ipsum lorem ipsum"
              }
            }, {
              "type" : "input",
              "value" : {
                "events" : {
                  "change" : "page_test.page_test_input_cpf.change"
                },
                "mask" : "cpf",
                "name" : "page_test_input_cpf",
                "type" : "text",
                "validation" : [ "required" ],
                "value" : "5553135535"
              }
            },
            {
              "type" : "input",
              "value" : {
                "events" : {
                  "change" : "page_test.page_test_input_cpf.change"
                },
                "mask" : "cpf",
                "name" : "outro_campo_teste",
                "type" : "text",
                "validation" : [ "required" ],
                "value" : "123 456 789"
              }
            },
             {
              "type" : "input",
              "value" : {
                "events" : {
                  "change" : "page_test.page_test_input_pass.change"
                },
                "name" : "page_test_input_pass",
                "type" : "text",
                "validation" : [ "required" ],
                "value" : "value_password"
              }
            }, {
              "type" : "select",
              "value" : {
                "events" : {
                  "change" : "page_test.page_test_input_select.change"
                },
                "name" : "page_test_input_select",
                "options" : [ {
                  "id" : 1,
                  "text" : "Lorem Ipsum"
                }, {
                  "id" : 2,
                  "text" : "Ipsum lorem"
                }, {
                  "id" : 3,
                  "text" : "Birl"
                } ],
                "type" : "select",
                "validation" : [ "required" ],
                "value" : 3
              }
            } ],
            "type" : "static"
          },
          "footer" : {
            "buttons" : {
              "render" : [ {
                "accessibility" : "Continuar",
                "color" : "blue",
                "disabled" : true,
                "events" : {
                  "click" : "page_test.page_test_submit.click"
                },
                "name" : "page_test_submit",
                "text" : "Continuar"
              } ],
              "type" : "side"
            }
          },
          "header" : {
            "title" : {
              "accessibility" : "value",
              "text" : "value"
            }
          }
        }
      }
    }
  }

export { DATA };
  
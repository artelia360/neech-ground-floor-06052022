var APP_DATA = {
  "scenes": [
    {
      "id": "0-c002-corridor-1",
      "name": "C0.02 Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8091363441196684,
        "pitch": 0.09974146749396162,
        "fov": 1.2997806026260816
      },
      "linkHotspots": [
        {
          "yaw": 0.7973044015670627,
          "pitch": 0.14268893687987116,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        },
        {
          "yaw": -1.178227772537337,
          "pitch": 0.2062831345981131,
          "rotation": 0,
          "target": "1-services"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2536603457215101,
          "pitch": 0.16808784487252026,
          "title": "2.02 Sub Reception",
          "text": ""
        }
      ]
    },
    {
      "id": "1-services",
      "name": "Services",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3289064858751622,
        "pitch": 0.020486484541917704,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.5552542785040036,
          "pitch": 0.161587017236684,
          "rotation": 0,
          "target": "0-c002-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-c002-corridor-2",
      "name": "C0.02 Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.3204976122550693,
        "pitch": 0.05233149573499318,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.6903613000871971,
          "pitch": 0.11960705959931772,
          "rotation": 0,
          "target": "3-201-sub-wait"
        },
        {
          "yaw": -0.902004078567078,
          "pitch": 0.17632413785354473,
          "rotation": 0,
          "target": "0-c002-corridor-1"
        },
        {
          "yaw": 2.3204980383604834,
          "pitch": 0.11087871310355268,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        },
        {
          "yaw": -3.1120905840907707,
          "pitch": 0.16315290424649298,
          "rotation": 0,
          "target": "4-208-tia-clinic-room"
        },
        {
          "yaw": 2.6929940651246724,
          "pitch": 0.1166278452489884,
          "rotation": 0,
          "target": "5-209-bookable-clinic-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-201-sub-wait",
      "name": "2.01 Sub Wait",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.16188895395382374,
        "pitch": 0.09303995362861883,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 2.7907905705227822,
          "pitch": 0.11396204481409455,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.9264925073249337,
          "pitch": 0.15839661566975138,
          "title": "2.02 Sub Reception",
          "text": ""
        }
      ]
    },
    {
      "id": "4-208-tia-clinic-room",
      "name": "2.08 TIA Clinic Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6362205749347591,
        "pitch": 0.06541436966874059,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.4014429130878376,
          "pitch": 0.18506425831427364,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-209-bookable-clinic-room",
      "name": "2.09 Bookable Clinic Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4349755588449806,
        "pitch": 0.04742541800982991,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.7166956606174333,
          "pitch": 0.17068220346800267,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-c002-corridor-3",
      "name": "C0.02 Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4843241412637518,
        "pitch": 0.22400993986467554,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -1.6486534170457645,
          "pitch": 0.11059218509004687,
          "rotation": 0,
          "target": "2-c002-corridor-2"
        },
        {
          "yaw": -1.2272238998169858,
          "pitch": 0.14686568345564588,
          "rotation": 0,
          "target": "7-205-orthotics-clinical-room"
        },
        {
          "yaw": -2.925062550329164,
          "pitch": 0.1655435995195269,
          "rotation": 0,
          "target": "9-210-cleaner-store"
        },
        {
          "yaw": 2.2842698358097717,
          "pitch": 0.1825317049198656,
          "rotation": 0,
          "target": "11-211-orthotics-workshop"
        },
        {
          "yaw": 1.4981412901726268,
          "pitch": 0.15766325879544318,
          "rotation": 0,
          "target": "12-c003-corridor-1"
        },
        {
          "yaw": -0.2394306670536892,
          "pitch": 0.11979118899725805,
          "rotation": 0,
          "target": "11-211-orthotics-workshop"
        },
        {
          "yaw": 0.07003029280236817,
          "pitch": 0.13590541248953159,
          "rotation": 0,
          "target": "8-207-orthotics-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-205-orthotics-clinical-room",
      "name": "2.05 Orthotics Clinical Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4853800531044161,
        "pitch": 0.07370274468815552,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.6310357609102324,
          "pitch": 0.18051293712262861,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-207-orthotics-store",
      "name": "2.07 Orthotics Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.237740235118963,
        "pitch": 0.07907442921720964,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.4634629040126779,
          "pitch": 0.21599208148343862,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-210-cleaner-store",
      "name": "2.10 Cleaner Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6455622408457753,
        "pitch": 0.08914573987230057,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 2.036508272273684,
          "pitch": 0.2147029271082701,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-206-orthotics-office",
      "name": "2.06 Orthotics Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.8545944537317531,
        "pitch": 0.05069613649327209,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.3594736360256725,
          "pitch": 0.1567191632606928,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-211-orthotics-workshop",
      "name": "2.11 Orthotics Workshop",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.245803015682439,
        "pitch": 0.11870784142827162,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.2142413598403792,
          "pitch": 0.1592658512642462,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-c003-corridor-1",
      "name": "C0.03 Corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.031888345752108194,
        "pitch": 0.011447514692028093,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 3.136637590883362,
          "pitch": 0.09511125069558624,
          "rotation": 0,
          "target": "6-c002-corridor-3"
        },
        {
          "yaw": 2.5854713388693558,
          "pitch": 0.14890723338348977,
          "rotation": 0,
          "target": "13-212-neuro-treatment-room"
        },
        {
          "yaw": 1.4727738064965354,
          "pitch": 0.2366125651017228,
          "rotation": 0,
          "target": "14-213-neuro-treatment-room"
        },
        {
          "yaw": -1.5344187655997779,
          "pitch": 0.15379486908227236,
          "rotation": 0,
          "target": "19-c003-corridor-3"
        },
        {
          "yaw": 0.08060793662803611,
          "pitch": 0.11279234297873231,
          "rotation": 0,
          "target": "15-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-212-neuro-treatment-room",
      "name": "2.12 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.8901835706258776,
        "pitch": 0.07122135718293521,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.45420292343266944,
          "pitch": 0.14984276859880197,
          "rotation": 0,
          "target": "12-c003-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-213-neuro-treatment-room",
      "name": "2.13 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.759112651873135,
        "pitch": 0.07968146926028652,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.501255526007463,
          "pitch": 0.21563046692347854,
          "rotation": 0,
          "target": "12-c003-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-c003-corridor-2",
      "name": "C0.03 Corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.8962102591679972,
        "pitch": 0.08705883022089367,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.2546887776109479,
          "pitch": 0.08173671966377682,
          "rotation": 0,
          "target": "12-c003-corridor-1"
        },
        {
          "yaw": -0.7828203380033649,
          "pitch": 0.17005379687714317,
          "rotation": 0,
          "target": "17-215-neuro-treatment-room"
        },
        {
          "yaw": 0.8652425630234859,
          "pitch": 0.12803384608524837,
          "rotation": 0,
          "target": "16-214-neuro-treatment-room"
        },
        {
          "yaw": -2.168638468002463,
          "pitch": 0.17770687373645977,
          "rotation": 0,
          "target": "18-216-neuro-gym"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-214-neuro-treatment-room",
      "name": "2.14 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.4066303626208878,
        "pitch": -0.03887123120701119,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.572091825999025,
          "pitch": 0.19601486143804792,
          "rotation": 0,
          "target": "15-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-215-neuro-treatment-room",
      "name": "2.15 Neuro Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.9831440337352007,
        "pitch": 0.08386880049479117,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.7665293738812249,
          "pitch": 0.184097455494852,
          "rotation": 0,
          "target": "15-c003-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-216-neuro-gym",
      "name": "2.16 Neuro Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0153280616616627,
        "pitch": 0.12588182327033692,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -2.3138482909761002,
          "pitch": 0.0653842736476058,
          "rotation": 1.5707963267948966,
          "target": "15-c003-corridor-2"
        },
        {
          "yaw": -0.08118099275355561,
          "pitch": 0.10598328999676809,
          "rotation": 0,
          "target": "19-c003-corridor-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1810654573105914,
          "pitch": 0.17638650687502988,
          "title": "2.17\nNeuro Store",
          "text": ""
        }
      ]
    },
    {
      "id": "19-c003-corridor-3",
      "name": "C0.03 Corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.6515618525809401,
        "pitch": 0.12540849415854538,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 2.5643061975654655,
          "pitch": 0.08766315850860451,
          "rotation": 0,
          "target": "12-c003-corridor-1"
        },
        {
          "yaw": 2.1445912863747303,
          "pitch": 0.11191020467067503,
          "rotation": 0,
          "target": "18-216-neuro-gym"
        },
        {
          "yaw": -0.6884469271605855,
          "pitch": 0.08501032689209786,
          "rotation": 0,
          "target": "20-c003-corridor-4"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.1174269367286254,
          "pitch": 0.11395249037080646,
          "title": "2.18\nPatient WC\nAccessible",
          "text": ""
        },
        {
          "yaw": -2.397537205373279,
          "pitch": 0.15176282378914152,
          "title": "2.19\nPatient WC\nAccessible",
          "text": ""
        },
        {
          "yaw": -1.263962088625659,
          "pitch": 0.1696480023019049,
          "title": "2.20\nSpeech Therapy\nRoom",
          "text": ""
        }
      ]
    },
    {
      "id": "20-c003-corridor-4",
      "name": "C0.03 Corridor 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.7310995100497131,
        "pitch": 0.20954462656082562,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 2.762654245497292,
          "pitch": 0.08210805461636461,
          "rotation": 0,
          "target": "19-c003-corridor-3"
        },
        {
          "yaw": -1.2213393954881155,
          "pitch": 0.14351726322436775,
          "rotation": 0,
          "target": "21-223-treatment-room-therapy"
        },
        {
          "yaw": 0.26321278202855325,
          "pitch": 0.2761855826789983,
          "rotation": 0,
          "target": "22-224-treatment-room-therapy"
        },
        {
          "yaw": 1.5988339729791106,
          "pitch": 0.1248534569433346,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        },
        {
          "yaw": -1.5209357025323271,
          "pitch": -0.29095815944003256,
          "rotation": 0,
          "target": "29-1f-extension-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.192539722187636,
          "pitch": 0.20798475755521295,
          "title": "2.21\nGeneral Therapy\nRoom",
          "text": ""
        }
      ]
    },
    {
      "id": "21-223-treatment-room-therapy",
      "name": "2.23 Treatment Room (Therapy)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6577397291702631,
        "pitch": 0.0012579686474829543,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.7596082355734346,
          "pitch": 0.17110377081113803,
          "rotation": 0,
          "target": "20-c003-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-224-treatment-room-therapy",
      "name": "2.24 Treatment Room (Therapy)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.5661459069965993,
        "pitch": 0.05723757346014935,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.9815914509121235,
          "pitch": 0.203957639522665,
          "rotation": 0,
          "target": "20-c003-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23--c003-corridor-5",
      "name": " C0.03 Corridor 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.06731984103223354,
        "pitch": 0.08667403981108279,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 3.1220490535198833,
          "pitch": 0.19806159334234508,
          "rotation": 0,
          "target": "20-c003-corridor-4"
        },
        {
          "yaw": -2.6891527890124802,
          "pitch": 0.2196544335209083,
          "rotation": 0,
          "target": "24-225-msk-treatment-room"
        },
        {
          "yaw": 2.3432829446774086,
          "pitch": 0.18879982027889142,
          "rotation": 0,
          "target": "25-229-msk--paediatric-store"
        },
        {
          "yaw": 1.0876745700229158,
          "pitch": 0.19609773617406745,
          "rotation": 0,
          "target": "26-228-msk-treatment-room"
        },
        {
          "yaw": -0.011134229048067823,
          "pitch": 0.14742604002945825,
          "rotation": 0,
          "target": "27-227-msk--paediatric-gym"
        },
        {
          "yaw": -0.6224522883978256,
          "pitch": 0.20061747042678668,
          "rotation": 0,
          "target": "28-226-msk-treatment-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-225-msk-treatment-room",
      "name": "2.25 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.32580493595757,
        "pitch": 0.03380341730898628,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -0.8293039291049968,
          "pitch": 0.2115394252684375,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-229-msk--paediatric-store",
      "name": "2.29 MSK & Paediatric Store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6718604130035146,
        "pitch": -0.029436466350933443,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.703565496067565,
          "pitch": 0.20734924804167854,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-228-msk-treatment-room",
      "name": "2.28 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3997587998998888,
        "pitch": 0.0845926735034368,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.633172910079077,
          "pitch": 0.23040500290515986,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-227-msk--paediatric-gym",
      "name": "2.27 MSK & Paediatric Gym",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.7675319937058127,
        "pitch": 0.08801206100884684,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.1384323846512352,
          "pitch": 0.19926324016256025,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-226-msk-treatment-room",
      "name": "2.26 MSK Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3348642162985946,
        "pitch": 0.06204745358284036,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.7296480016335511,
          "pitch": 0.15440993835056105,
          "rotation": 0,
          "target": "23--c003-corridor-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-1f-extension-1",
      "name": "1F Extension 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.1706216234439708,
        "pitch": 0.24040500697390144,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -0.4901762046012834,
          "pitch": 0.07236527438210416,
          "rotation": 0,
          "target": "30-1f-extension-2"
        },
        {
          "yaw": -1.2725447845324247,
          "pitch": -0.33751532151358177,
          "rotation": 0,
          "target": "32-2f-extension"
        },
        {
          "yaw": -1.324203440042961,
          "pitch": 0.7199578205250283,
          "rotation": 3.141592653589793,
          "target": "20-c003-corridor-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-1f-extension-2",
      "name": "1F Extension 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2087697772134494,
        "pitch": 0.19133703128106916,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -1.5356371266722562,
          "pitch": 0.16286930962118262,
          "rotation": 0,
          "target": "31-1f-extension-3"
        },
        {
          "yaw": 2.3267230893104616,
          "pitch": 0.07990248361881669,
          "rotation": 0,
          "target": "29-1f-extension-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-1f-extension-3",
      "name": "1F Extension 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.2212639748016052,
        "pitch": 0.02182077584162201,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 1.8703904123280397,
          "pitch": 0.06704477891288185,
          "rotation": 0,
          "target": "30-1f-extension-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-2f-extension",
      "name": "2F Extension",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.10747553568304014,
        "pitch": -0.014718233175470274,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.03343513604640158,
          "pitch": 0.05535135999298468,
          "rotation": 0,
          "target": "33-2f-north-1"
        },
        {
          "yaw": 0.02814932388068314,
          "pitch": 0.4724828439504911,
          "rotation": 3.141592653589793,
          "target": "29-1f-extension-1"
        },
        {
          "yaw": 0.05831237189458349,
          "pitch": -0.46701975990084676,
          "rotation": 0,
          "target": "35-extension-roof"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-2f-north-1",
      "name": "2F North 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8257844908629224,
        "pitch": 0.07866275679121415,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": -0.9929911234994222,
          "pitch": 0.09491105497309782,
          "rotation": 0,
          "target": "34-2f-north-2"
        },
        {
          "yaw": 2.228761455668942,
          "pitch": 0.11553914680048472,
          "rotation": 0,
          "target": "32-2f-extension"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-2f-north-2",
      "name": "2F North 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.0652172638835378,
        "pitch": 0.05347440642844248,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.9829250182263181,
          "pitch": 0.15795356983245412,
          "rotation": 0,
          "target": "33-2f-north-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-extension-roof",
      "name": "Extension Roof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.35881075157604414,
        "pitch": 0.06222820393558237,
        "fov": 1.375518884320117
      },
      "linkHotspots": [
        {
          "yaw": 0.319065202781875,
          "pitch": 0.30522334033232745,
          "rotation": 3.141592653589793,
          "target": "32-2f-extension"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEECH Ground Floor 06/05/2022",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};

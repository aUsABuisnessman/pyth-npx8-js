import { PublicKey } from "@solana/web3.js";
import { Program, AnchorProvider, Idl } from "@coral-xyz/anchor";
import { PythOracleCoder } from "./coder";
import IDL from "./idl.json"

export function pythOracleProgram(
    programId: PublicKey,
    provider: AnchorProvider
): Program<PythOracle> {
  return new Program<PythOracle>(
    IDL as PythOracle,
    programId,
    provider,
    new PythOracleCoder(IDL as Idl)
  );
}


export type PythOracle = {
  "version": "2.20.0",
  "name": "pyth_oracle",
  "instructions": [
    {
      "name": "initMapping",
      "discriminant": { "value": [2, 0, 0, 0, 0, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "freshMappingAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addMapping",
      "discriminant": { "value": [2, 0, 0, 0, 1, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "curMapping",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nextMapping",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "addProduct",
      "discriminant": { "value": [2, 0, 0, 0, 2, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tailMappingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "newProductAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "updProduct",
      "discriminant": { "value": [2, 0, 0, 0, 3, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "productAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "newData",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "addPrice",
      "discriminant": { "value": [2, 0, 0, 0, 4, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "productAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expo_",
          "type": "i32"
        },
        {
          "name": "ptype_",
          "type": "u32"
        }
      ]
    },
    {
      "name": "addPublisher",
      "discriminant": { "value": [2, 0, 0, 0, 5, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "pub_",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "delPublisher",
      "discriminant": { "value": [2, 0, 0, 0, 6, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "pub_",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updPrice",
      "discriminant": { "value": [2, 0, 0, 0, 7, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "status_",
          "type": "u32"
        },
        {
          "name": "unused_",
          "type": "u32"
        },
        {
          "name": "price_",
          "type": "i64"
        },
        {
          "name": "conf_",
          "type": "u64"
        },
        {
          "name": "pub_slot_",
          "type": "u64"
        }
      ]
    },
    {
      "name": "aggPrice",
      "discriminant": { "value": [2, 0, 0, 0, 8, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "status_",
          "type": "u32"
        },
        {
          "name": "unused_",
          "type": "u32"
        },
        {
          "name": "price_",
          "type": "i64"
        },
        {
          "name": "conf_",
          "type": "u64"
        },
        {
          "name": "pub_slot_",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initPrice",
      "discriminant": { "value": [2, 0, 0, 0, 9, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "expo_",
          "type": "i32"
        },
        {
          "name": "ptype_",
          "type": "u32"
        }
      ]
    },
    {
      "name": "setMinPub",
      "discriminant": { "value": [2, 0, 0, 0, 12, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "min_pub_",
          "type": "u8"
        }
      ]
    },
    {
      "name": "updPriceNoFailOnError",
      "discriminant": { "value": [2, 0, 0, 0, 13, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clock",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "status_",
          "type": "u32"
        },
        {
          "name": "unused_",
          "type": "u32"
        },
        {
          "name": "price_",
          "type": "i64"
        },
        {
          "name": "conf_",
          "type": "u64"
        },
        {
          "name": "pub_slot_",
          "type": "u64"
        }
      ]
    },
    {
      "name": "resizeAccount",
      "discriminant": { "value": [2, 0, 0, 0, 14, 0, 0, 0] },
      "accounts": [
        {
          "name": "fundingAccount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "priceAccount",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "MappingAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "header",
            "type": {
              "defined": "AccountHeader"
            }
          },
          {
            "name": "number_of_products",
            "type": "u32"
          },
          {
            "name": "unused_",
            "type": "u32"
          },
          {
            "name": "next_mapping_account",
            "type": "publicKey"
          },
          {
            "name": "products_list",
            "type": {
              "array": ["publicKey", 640]
            }
          }
        ]
      }
    },
    {
      "name": "PriceAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "header",
            "type": {
              "defined": "AccountHeader"
            }
          },
          {
            "name": "price_type",
            "type": "u32"
          },
          {
            "name": "exponent",
            "type": "i32"
          },
          {
            "name": "num_",
            "type": "u32"
          },
          {
            "name": "num_qt_",
            "type": "u32"
          },
          {
            "name": "last_slot_",
            "type": "u64"
          },
          {
            "name": "valid_slot_",
            "type": "publicKey"
          },
          {
            "name": "twap_",
            "type": {
              "defined": "PriceEma"
            }
          },
          {
            "name": "twac_",
            "type": {
              "defined": "PriceEma"
            }
          },
          {
            "name": "timestamp_",
            "type": "i64"
          },
          {
            "name": "min_pub_",
            "type": "u8"
          },
          {
            "name": "unused_1_",
            "type": "i8"
          },
          {
            "name": "unused_2_",
            "type": "i16"
          },
          {
            "name": "unused_3_",
            "type": "i32"
          },
          {
            "name": "productAccount",
            "type": "publicKey"
          },
          {
            "name": "next_price_account",
            "type": "publicKey"
          },
          {
            "name": "prev_slot_",
            "type": "u64"
          },
          {
            "name": "prev_price_",
            "type": "i64"
          },
          {
            "name": "prev_conf_",
            "type": "u64"
          },
          {
            "name": "prev_timestamp_",
            "type": "i64"
          },
          {
            "name": "agg_",
            "type": {
              "defined": "PriceInfo"
            }
          },
          {
            "name": "comp_",
            "type": {
              "array": [
                {
                  "defined": "PriceComponent"
                },
                32
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ProductAccount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "header",
            "type": {
              "defined": "AccountHeader"
            }
          },
          {
            "name": "first_price_account",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "AccountHeader",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "magic_number",
            "type": "u32"
          },
          {
            "name": "version",
            "type": "u32"
          },
          {
            "name": "account_type",
            "type": "u32"
          },
          {
            "name": "size",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "PriceEma",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "val_",
            "type": "i64"
          },
          {
            "name": "numer_",
            "type": "i64"
          },
          {
            "name": "denom_",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "PriceInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "price_",
            "type": "i64"
          },
          {
            "name": "conf_",
            "type": "u64"
          },
          {
            "name": "status_",
            "type": "u32"
          },
          {
            "name": "corp_act_status_",
            "type": "u32"
          },
          {
            "name": "pub_slot_",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "PriceComponent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pub_",
            "type": "publicKey"
          },
          {
            "name": "agg_",
            "type": {
              "defined": "PriceInfo"
            }
          },
          {
            "name": "latest_",
            "type": {
              "defined": "PriceInfo"
            }
          }
        ]
      }
    }
  ]
}

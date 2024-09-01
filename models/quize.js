const mongoose = require('mongoose');
const User = require('./user');
const schema = mongoose.Schema;

const quize = new schema({
  name: { type: String, require: true },
  type: { type: String, require: true },
  impressions: { type: Number, default: 0 },
  createdOn: { type: Date, default: Date.now() },
  admin: { type: schema.Types.ObjectId, ref: User, require: true },
  questions: [
    {
      name: { type: String, require: true },
      type: { type: String, require: true },
      timer: Number,
      options: [
        {
          currect: Boolean,
          text: String,
          url: String,
        },
      ],
    },
  ],
});

const Quize = mongoose.model('Quize', quize);

module.exports = Quize;

/* //? QNA type quize
{
    "name": "Test Quize 1",
    "type": "qna",
    "impressions": 0,
    "createdOn": 1725124579856,
    "questions": [
        {
            "name": "Question 1 : React is a ?",
            "type": "t",
            "timer": 20000,
            "options": [
                {
                    "currect": true,
                    "text": "Library",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Framework",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Language",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Brand",
                    "img": ""
                }
            ]
        },
        {
            "name": "Question 3 : Which is node img?",
            "type": "i",
            "timer": 10000,
            "options": [
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": true,
                    "text": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 3 : Which is node with text?",
            "type": "ti",
            "timer": 15000,
            "options": [
                {
                    "currect": false,
                    "text": "Node.js",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": true,
                    "text": "Node.ts",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.java",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.py",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 4 : Which is node with text?",
            "type": "ti",
            "timer": 15000,
            "options": [
                {
                    "currect": false,
                    "text": "Node.js",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": true,
                    "text": "Node.ts",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.java",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.py",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 5 : React is a ?",
            "type": "t",
            "timer": 20000,
            "options": [
                {
                    "currect": true,
                    "text": "Library",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Framework",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Language",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Brand",
                    "img": ""
                }
            ]
        }
    ]
}
*/

/* //? Poll type
{
    "name": "Test Quize 10",
    "type": "poll",
    "impressions": 0,
    "createdOn": 1725124579856,
    "questions": [
        {
            "name": "Question 1 : React is a ?",
            "type": "t", 
            "options": [
                {
                    "currect": false,
                    "text": "Library",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Framework",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Language",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Brand",
                    "img": ""
                }
            ]
        },
        {
            "name": "Question 2 : Which is node img?",
            "type": "i", 
            "options": [
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 3 : Which is node with text?",
            "type": "ti", 
            "options": [
                {
                    "currect": false,
                    "text": "Node.js",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "Node.ts",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.java",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.py",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 4 : Which is node with text?",
            "type": "ti", 
            "options": [
                {
                    "currect": false,
                    "text": "Node.js",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "Node.ts",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.java",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                },
                {
                    "currect": false,
                    "text": "node.py",
                    "img": "https://philna.sh/_astro/node.DvAuachI_1ovMWA.webp"
                }
            ]
        },
        {
            "name": "Question 5 : React is a ?",
            "type": "t", 
            "options": [
                {
                    "currect": false,
                    "text": "Library",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Framework",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Language",
                    "img": ""
                },
                {
                    "currect": false,
                    "text": "Brand",
                    "img": ""
                }
            ]
        }
    ]
}

*/

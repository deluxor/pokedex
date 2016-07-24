# pokedex
A simple Node.JS API Pokedex (three routes only)
This node API reads the pokemon DB in to memory and runs the queries directly on memory for a faster experience!

Please feel free to upgrade it with more features / fixes.

#Setup

1 - Clone repo:
``` git clone https://github.com/deluxor/pokedex.git ```;

2 - ```cd``` into the directory;

3 - Run ```npm install```;

4 - Access it trough port defined in process env, or static 3000;

#Routes

```
/getall
```
This gives you the complete list with the full details of each pokemon;

```
/getbynumber/001
```
Swap the number for the pokemon you want, and it will list the full details of the searched pokemon;

```
/getbyname/Ivysaur
```
Swap the name for the pokemon you want, and it will list the full details of the searched pokemon;


#Example of a pokemon full detail body:

```
{
    "Number": "002",
    "Name": "Ivysaur",
    "Classification": "Seed Pokèmon",
    "Type I": [
      "Grass"
    ],
    "Type II": [
      "Poison"
    ],
    "Weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "Fast Attack(s)": [
      "Razor Leaf",
      "Vine Whip"
    ],
    "Weight": "13.0 kg",
    "Height": "1.0 m",
    "Previous evolution(s)": [
      {
        "Number": "001",
        "Name": "Bulbasaur"
      }
    ],
    "Next Evolution Requirements": {
      "Amount": 100,
      "Name": "Bulbasaur candies"
    },
    "Next evolution(s)": [
      {
        "Number": "003",
        "Name": "Venusaur"
      }
    ]
  }
  ```

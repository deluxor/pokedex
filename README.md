# pokedex
A simple Node.JS API Pokedex (three routes only)

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

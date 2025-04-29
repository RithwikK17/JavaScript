// to print any content on DOM (Document Object Model)
document.writeln("Welcome to JavaScript");

document.writeln("<h1> Welcome to JavaScript </h1>");
document.writeln('<h2> JavaScript is a front-end script </h2>')

document.writeln(`<h3>JavaScript is an object oriented script </h3>`);

//display image
document.writeln(`<img src="https://picsum.photos/id/55/300/300" alt='no image found'/>`);

// 4 colors in orderedlist

document.writeln("<ol> <li>red</li> <li>blue</li> <li>green</li> <li>orange</li> </ol>");

document.writeln(`<ul>
                    <li>red</li>
                    <li>green</li>
                    <li>blue</li>
                    <li>pink</li>
                </ul>`);

// print your name (h1), email id(h3), mobile number(p) using only one "document.writeln" menthod

document.writeln(`<div class="block">
        <h1>Rithwik</h1>
        <h3>rithwik2603@gmail.com</h3>
        <p>8073905739</p>
    </div>`);

//print a table
document.writeln(`<table>
    <tr class="heading">
    <th>Rank</th>
    <th>Name</th>
    <th>Points</th>
    <th>Team</th>
    </tr>

    <tr>
    <td>1</td>
    <td>Dominic</td>
    <td>88,100</td>
    <td>dcode</td>
    </tr>

    <tr>
    <td>3</td>
    <td>Sally</td>
    <td>72,400</td>
    <td>Students</td>
    </tr>

    <tr>
    <td>4</td>
    <td>Nick</td>
    <td>52,500</td>
    <td>dcode</td>
    </tr>
    </table>`);
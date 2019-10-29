
const coin = {
    state: 0,
    flip: function () {
        // 1. Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
        let changeState = Math.random();

        if (changeState > 0.5) {

            this.state = 1;

        }
        else {
            this.state = 0;

        }

        console.log(this.state);


    },

    toString: function () {
        // 2. Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.

        if (this.state === 0) {
            return "Head";

        } else {
            return "Tail";
        }


    },

    toHTML: function () {
        const image = document.createElement('img');

        image.style.width = "300px"
        // const image2 = document.createElement('img')

        // 3. Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.

        if (this.state === 0) {
            image.src = "./asset/images/head.png";

        }

        else {
            image.src = "./asset/images/tail.jpg";


        }

        return image;
    }
};

function display20Flips(flips) {
    const results = [];
    // 4. Use a loop to flip the coin 20 times, each time displaying the result 
    // of the flip as a string on the page.  After your loop completes, return an array with 
    // the result of each flip.


    for (let i = 0; i < flips; i++) {

        coin.flip();
        results[i] = coin.toString();


    }

{
    document.querySelector("#list").innerHTML = results;
    return results;
}
     
};
display20Flips(20);


function display20Images(flips) {
    const results = [];
    // 5. Use a loop to flip the coin 20 times, and display the results of each 
    // flip as an image on the page.  After your loop completes, return an array with result 
    // of each flip.

    for (let i = 0; i < flips; i++) {

        coin.flip();
        
    image=coin.toHTML();
    document.querySelector("#picture").appendChild(image);
    results[i]=image
    }

{
    return results;
}
     
};
 display20Images(20);


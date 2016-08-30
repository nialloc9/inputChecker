# inputChecker
This is an input validator that uses jQuery. It was created with re-usability as it's main feature.
Simply add the javascript file into your project and call the function. 
It checks the inputs and checks the user has submitted all the required data. 
If they have it enables a button and gives a message. If not it disables and gives a different message.

# Instructions
1. Make sure you have jQuery available in your project.
2. Include the javascript file inputCheck.js.
3. Create your form and give all required inputs the same class name. e.g class ='required'
4. Add the disabled attribute to your button with a relevant id.. e.g <input type='submit' id='button' disabled/>
5. Add an area with suitable id for your info message to appear. e.g <p id='info'></p>
6. Call inputChecker() function and give suitable arguements. eg inputChecker('required, 'button, 'info', ''This is my error message, 'This is my success message')
7. Leave error message and success messages blank if you don't want to use them.

# Example
                $(document).ready(function(){
                            inputChecker('required', 'button', 'info', 'Please fill in all fields.', 'Awesome, all done.');
                        });


# NB
Also returns a boolean value of true or false so we can use an if statement to check before we continue to other code.

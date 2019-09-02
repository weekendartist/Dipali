### Initial Setup Guide:
> New Angular App From Scratch:
	$ npm install -g @angular/cli
	$ ng new chatbot

> Install Required Libraries:
	$ npm install api-ai-javascript --save-dev

> Fleshing out a Feature NgModule <to keep the code isolated and maintainable>:
	$ ng g module chat
	$ ng g component chat/chat-dialog -m chat
	$ ng g service chat
	

> Building a Basic DialogFlow Agent
	>> Create an Agent
	>> Create an Intent
		>> User Invokes an Intent
		>> Bot Recognizes the Intent
		>> Bot Tries to Fulfill the Intent by Replying/Performing Some Tasks on the Backend
	>> Create Small-Talk
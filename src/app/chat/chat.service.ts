/*
* The Chat Service will make the API call to DialogFlow
1. Create a "Message" class to format messages
2. Initialize DialogFlow (ApiAiClient) with your API Token
3. Define a "BehaviorSubject" that is an array of messages
4. The "Converse" method adds a user message to the array, then hits the API and updates the bot's response in the same array
*/

import { Injectable } from '@angular/core';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

/*
Message class for displaying messages in the component
*/

export class Message{
  constructor(public content:string, public sentBy:string){

  }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.Dipali;
  readonly client = new ApiAiClient({accessToken:this.token});
  conversation = new BehaviorSubject<Message[]>([]);

  //sends and receives messages via dialogflow
  converse(msg:string){
    const userMessage = new Message(msg,'user');
    this.update(userMessage);
    return this.client.textRequest(msg).then(res=>{
      const speech = res.result.fulfillment.speech;
      const botMessage = new Message(speech,'bot');
      this.update(botMessage);
    })
  }

  //adds messages to source
  update(msg:Message){
    this.conversation.next([msg]);
  }
  constructor() { }
}

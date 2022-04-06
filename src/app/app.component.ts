import { Component, OnInit } from '@angular/core';
import { Container, CosmosClient, Database } from '@azure/cosmos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  client: CosmosClient;
  title: string = "test";
  constructor(){
    this.client = new CosmosClient({
      endpoint: "https://sajee-cosmos-global.documents.azure.com:443/",
      key: "piaJw0E8GoSzPXtfZlt9JIKJXbXzxwvBo7wIkIWwkYBpwFL9c6wVELn2sz7gLXzGzBsQdqbMdazzD0ce5Et1gA=="
    });
    this.fetchData();
  }
  async fetchData() {
    const dbResponse = await this.client.databases.createIfNotExists({
      id: "testpoc-cosmos"
    })
    console.log(dbResponse);
  }
}

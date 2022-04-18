const pullRequest = {
    title: "pull project",
    branchName: "main",
    dateCreated: 10/10/2019,
    status: "updated",
    repositoryNameAssociated: "adrianRepo",
    getStatus: function(){
      return this.status
    },
    getTitleAndAutor: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del repo: " + pullRequest.getTitleAndAutor());
   console.log("Status: " + pullRequest.getStatus());
   
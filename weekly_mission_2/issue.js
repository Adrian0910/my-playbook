const issue = {
    title: "Issues on this page",
    repositoryNameAssociated: "adrian0910",
    status: "active",
    numberOfComments: 100,
    labels: 'bug, feature',
    author: 'Adrian',
    dateCreated: 15,
    lastUpdated: 17,
    getTitleAndAuthor: function(){
      return this.title + this.author;
    },
    getGeneralInfo: function(){
      return `This repository ${this.title} was created by ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del repo: " + issue.title)
   console.log("Status del issues: " + issue.status)
 /*   console.log("General info: " + issue.getGeneralInfo()) */
   console.log(issue.getGeneralInfo())
   
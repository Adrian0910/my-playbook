const twitter = {
    user: { 
        user: "adrian",
        username: "oxim",
        bio: "Describe tu vida",
        age: 24
    },
    trending_topic: "Agua",
    hashtag: "cuidaelagua",

    getTopic: function(){
        return `Popular hoy: ${this.trending_topic} hashtag ${this.hashtag}`;
      },
    getUser: function(){
        return `Datos del usuario: ${this.user.user}`;
      }
   }
   
   console.log("Información del usuario:" + twitter.getUser());
   console.log("Popular el dia de hoy: " + twitter.getTopic());

   
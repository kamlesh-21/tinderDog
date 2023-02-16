class Character {
    constructor(data){
        Object.assign(this, data)
        
    }
    

  getReactions() {
    
        return (!this.hasBeenLiked && this.hasBeenSwiped) ? `<img class="dislike-img" src="images/badge-nope.png">` 
        :  this.hasBeenLiked ? `<img class="like-img" src="./images/badge-like.png" alt="like-image">` 
        :  ""
    } 

    
    getDogsHtml() {
        const { name, avatar, age, bio } = this
        const isLiked = this.getReactions()
        return `
            <div class="character">
                ${isLiked}
                <div class="dog-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="dog-bio">
                        ${bio}
                    </div>
                </div>
                <img class="avatar" src="${avatar}">
             </div>
             `
    }
}

export default Character
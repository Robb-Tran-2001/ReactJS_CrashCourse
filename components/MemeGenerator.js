import React from "react"

class MemeGenerator extends React.components
{
    constructor (
        super()
        this.state={
            topText: ""
            bottomText: ""
            randomImg: "data:image/jpeg;base64,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"
            allMemeImgs: []
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    ) 

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.handleDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.allMemeImgs[randNum].url
        this.setState({randomImg: randMemeImg})
    }

    render(){
        return (
            <div>
                <form className="meme-form" obSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button> Gen
                    </button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h2 className="top"> {this.state.topText} </h2>
                    <h2 className="bottom"> {this.state.bottomText} </h2>
            </div>
        )
    }
}

export default MemeGenerator
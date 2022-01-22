import React, {Component} from 'react'
import './CContents.css'
import jsonData from '../res/text.json'
import jsonData2 from '../res/text2.json'
class CContents extends Component {

    constructor(){
        super()
        this.state = {msg: 'Witaj użytkowniku. kliknij przycisk aby poznać wiadomość'}
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        this.txtData2 = () => JSON.parse(JSON.stringify(jsonData2));
        const imgContext = require.context('../res/', false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce((icons, file) => {
            const cname = imgContext(file);
            const label = file.slice(2,-4);
            img[label] = cname;
            return img;
        }, {});
        this.changeMsg = this.changeMsg.bind(this);
    }
    
    changeMsg = () => {
       this.setState({msg: 'Właśnie jesteś uczestnikiem kursu React, gratulacje!'});
        console.log('Przycisk został wciśnięty');
    }

    render()
    {

       /*  const items = [];
        for(let i=0;i<this.txtData().count; i++){
            let value = this.txtData().text[i];
            items.push(
                <div className="contentFlex">
                    <img className="contentFlexImg" src={this.imgs['img'+(i+1)]} alt=""/><br/>
                    <p className="contentFlexTxt">{value}</p><br/>
                </div>
            );
        } */

        const tabData = this.txtData2().data;
        const items = tabData.map((item) => (
            <div id={`"div${item.id}"`} className="contentFlex">
                    <img className="contentFlexImg" src={this.imgs[item.img]} alt=""/><br/>
                    <p className="contentFlexTxt">{item.text}</p><br/>
            </div>

        ))

        return(
            <div className="contentDivClass">
                {items}
                <h1>{this.state.msg}</h1>
                <button onClick={this.changeMsg}>Kliknij, aby poznać tajemnicę</button>
            </div>
        )
    }
}

export default CContents

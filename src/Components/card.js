import React from "react"
 
class Card extends React.Component{
    render(){
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan Gambar / cover */}
                        <div className="col-12">
                            <img src={this.props.cover} className="img"
                            height="200" />
                        </div>
 
                        {/* menampilkan deskripsi */}
                        <div className="col-12" align="center">
                            <h5 className="text-info" align="center">
                                { this.props.judul }
                            </h5>
                            <h6 className="text-dark" align="center">
                                Lomba: { this.props.lomba}
                            </h6>
 
                            {/* button untuk mengedit */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
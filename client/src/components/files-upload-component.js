import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Results from './results';

export default class FilesUploadComponent extends Component 
{

    constructor(props) 
    {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = 
        {
            imgCollection: ''
        }

        this.setState({showResults: false});
    }

    onFileChange(e) 
    {
        this.setState({ imgCollection: e.target.files })
    }

    onSubmit(e) 
    {
        e.preventDefault()

        var formData = new FormData();

        var url = "http://localhost:34521/images/";

        for (const key of Object.keys(this.state.imgCollection)) 
        {
            formData.append('file', this.state.imgCollection[key], this.state.imgCollection[key].name);
        }

        console.log(formData);

        axios.post(url, formData, 
        {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        }).then(res => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

        this.setState({showResults: true});
    }

    render() 
    {
        return (
                <div>
                    <div class="background-2 shadow p-3 mb-5 rounded">
                        <h1 class="title-text">Flexipe</h1>
                        <h2>The flexible recipe generator!</h2>
                    
                        <form onSubmit={this.onSubmit}>
                            <div class="custom-file custom-padding-top custom-margin-top">
                                <input type="file" class="custom-file-input form-control-sm" id="customFile" name="imgCollection" onChange={this.onFileChange} multiple />
                                <label class="custom-file-label col-form-label-sm col-md-8 offset-md-2" for="customFile">Upload a picture of ingredients!</label>
                            </div>
                            <div className="form-group">
                                <button class="btn btn-primary" type="submit">Get Recipes</button>
                            </div>
                        </form>
                    </div>
                    
                    {this.state.showResults ? <Results /> : null}
                    
                </div>
        )
    }
}
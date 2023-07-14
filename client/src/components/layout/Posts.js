import React, { useState } from "react";
import ErrorList from "./ErrorList";
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Dropzone from "react-dropzone"
const Posts = ({ user }) => {

    const [newPost, setNewPost] = useState({
        type: "",
        mediaURL: "",
        postBody: "",
    })

    const [imagePreview, setImagePreview] = useState({
        name: "",
        preview: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target || event.currentTarget;

        setNewPost({
            ...newPost,
            [name]: value,
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        postNewPost()
    }

    const handleImageUpload = (acceptedImage) => {
        if (Array.isArray(acceptedImage) && acceptedImage.length > 0) {
            setNewPost({
                ...newPost,
                mediaURL: acceptedImage[0],
            });
            setImagePreview({
                name: acceptedImage[0].name,
                preview: URL.createObjectURL(acceptedImage[0])
            })
        } else {
            console.error("Invalid image file")
        } 
    }
    return (
        <div>

            <div>
                <h1>Add new NOT-C post here</h1>
            </div>
            <div>
                <form >
                    <FormControl fullWidth>
                        <InputLabel htmlFor="type">Media Type</InputLabel>
                        <Select
                            value={newPost.type}
                            onChange={handleInputChange}
                            name="type"
                        >
                            <MenuItem value="picture">Picture</MenuItem>
                            <MenuItem value="video">Video</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        type="text"
                        label="Share Thoughts"
                        variant="outlined"
                        name="postBody"
                        onChange={handleInputChange}
                        value={newPost.postBody}>
                    </TextField>

                    <div>
                    <Dropzone onDrop={handleImageUpload} >
                                    {({ getRootProps, getInputProps }) => (
                                        <section>
                                            <div {...getRootProps()} >
                                                <input {...getInputProps()} />
                                                {/* {imagePreview.preview !== "" ? <p className="image-drop-section callout">Add an Image to your care guide - drag 'n' drop or click upload</p> : <img className="image-drop-section callout" src={imagePreview.preview} alt={imagePreview.name} />} */}
                                                <p className="image-drop-section callout">Upload picture or video - drag 'n' drop or click upload</p>
                                            </div>
                                        </section>
                                    )}
                                </Dropzone>
                                <img className="plant-photo" src={imagePreview.preview || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAllBMVEXv8PL6+/0REiSAiZAAAAD9/v/W19ru7/H09fd0f4V5g4rS1tnBxcmxt7t2gInn6euNlpsLDCAAABcAABqjqa4AABMAABjM0NSFjZQMDiCNjZWUlJoTFCZtbnYnKDciIzGcnKAvLzt+f4eCgopBQUxzc3sAAB8AAAxgYWs3OERXV2IbHS3Gys6tsrbc3+JKSlRnaHFNUFlcccasAAAE3ElEQVR4nO3cCXeiSBSGYQcYgkYbyxKNVSyyRZYk6P//cwMurSZo2nhabznfm8R2Oenm8RbgMTnd+edB69x7A/5WgKkWYKoFmGoBplqAqRZgqgWYagGmWoCpFmCqBZhq/Q9hVkeBrB/A7r3NfxZggBEJMMCIBBhgRAIMMCIBBhiRAAOMSIABRiTAACMSYIARCTDAiAQYYEQCDDAiAQYYkQADjEiAAUYkwAAjEmCAEQkwwIh0E5h1dSRh1nRwdc8EYdbgV+/XtXUHlw7tBhPr6v1rG+jdS//Vvw+zu8Ord7LOsGtThD1d+C1fegLsd4AB9jnAzqQ4zHr6sDutJ2K1YVb/pdcbvrXJlIbVL730utYXT0rDPnr6ul4LQWWYNdjB+l9HpjRsrG9h7w8Ge9SJPew+Vo+suz4qtgxMbVjHmg51ffj8cOex5j0f225/30Zx2OkA23cnmHnZm06qwKxxb3qRTBFY7dJ/XSRTBDZuTsUXzUwJmDXevMQ4K7OPHSrAdi793Gq0X46fDBVgv11nZma/6L3hoYQ+zDpwnZJZtat+7PDpIA87dp1YjWvXsYw67LOrbWbW1lW3X43EYV9dLbK962BmtGFtri+yA9eBjDas1fVpPzty7VcjZVj7vD7N7LNrd9QnDDvt2susL67daiQMO+PS9e5G1uLaysjCzs1rN7O2ee1WI1XYd6617ISrrp4ZUdi3rvrY+HbS1cyMJuxb1Xrrzz04VBj2TYABBhhgjwKzvj+J/UE9gr+v+Kz3rk5v/enSnWGW/Xx19sW/FXwD2H0CDDAiAQYYkQADjEiAAUYkwAAjEmCAEQkwwIgEGGBEAgwwIgEGGJEAA4xIgAFGJMAAIxJggBEJMMCIBBhgRAIMMCIBBhiRfgJ7UqCfwK7/L8Nv0Q9gigeYagGmWoCpFmCqBZhqAaZagKkWYKoFmGoBplqAqVbn3wetYz5oHeNB62gPGmCqtYWx7Zd28Kemca6x/a3mGt/fJN4GNsuZxvxyfZ2F7uah2agonDDfUdyKaUERzu6wkT9pA+PLjI/EyBlpE8cQJXOcCXOMcV06NxzDYMwwwqlh5CIhNrKTz/MGxkrhBFEkYyOSaSRDKdNqvjJXhuHZhTSnfmKaVT8x/SS/JazeD5i23RsYm+1vbe5pPl3GWfO5vuB8xrh7CNMc6S69dJR6S8OIX4VrpGmxSKYfkSf9qZG993PDt83mL7ihy03DrN5wP3fLegcRWc59zgKPudxnAXMDl62SeCnyVCYyKeeuzFIRxgU/hPGsEIXMllHCHcHmi9EyrvjCeDUjWQ2MfPC2cEJ7Gtx2HY7itHoX9XZVIhIrUY1XaRQVMl5kaRbF81h4HouzLCllNq6yeT725ux9nk4OYRobR6Vgvi9ZkGVe5spixeeeeEvM0Ez7qRxEyVtlLm4KY9V7KKt5EhWxiNylFJknRBWLMsrSVMqkSNNyKZfFPJfRKh5E9Z1RGs+dIxj3Ah6KlPkidZbGUgRhyFYymjhZ9SozZ1EvSc9Ib33oKHkYsIT5YRnMkrIsE64lQRlOEi3X/LIMfZbwJE8Kt15ovtM86oSBdgRrzlBsUp+3RlyrP0bN3sSdSXM/c+pVyx3Gb38Wq7dp1lyw+uhXX9sePHYf2+tse4zZXrBPsEcLMNV6WNh/8aby8QlaAncAAAAASUVORK5CYII="} alt={imagePreview.name} />
                    </div>
                </form>
            </div>

            <div>
            </div>
        </div>
    )
}

export default Posts
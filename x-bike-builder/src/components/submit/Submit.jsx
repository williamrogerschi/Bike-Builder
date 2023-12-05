import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './submit.css'
import { BASE_URL } from '../../global';

function Submit(props) {

    const buttonStyle = {
        fontFamily: 'Manrope, sans-serif',
        fontWeight: '300',
    }

    // const saveBuild = async () => {
    //     try {
    //       const buildId = props.currentBuildId; // Assuming you have the ID of the current build
    //       const userId = props.userData._id; // Assuming you have the ID of the user
    
    //       const response = await axios.post(`${BASE_URL}users/${userId}/save_build`, {
    //         buildId: buildId,
    //       });
    
    //       if (response.status === 200) {
    //         console.log('Build saved successfully');
    //         // Perform any necessary actions after successful save
    //       } else {
    //         console.error('Failed to save build');
    //       }
    //     } catch (error) {
    //       console.error('Error saving build:', error);
    //     }
    //   };


    return (
        <>
        <div className='submit-build'>
            <Button variant="light" style={buttonStyle} 
            // onClick={saveBuild}
            >
            Submit Build
            </Button>
        </div>
        </>
    )

}

export default Submit
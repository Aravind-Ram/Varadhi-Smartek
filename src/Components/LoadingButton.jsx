import React from 'react';

import { Button, Spinner } from 'react-bootstrap';

const LoadingButton = (props) => {

    return (
        <Button 
            type={props.type} 
            variant={props.variant} 
            disabled={props.disabled} 
            onClick={props.onClick}
            className={ props.class ? props.class.toString(" ") : '' }>
        {
            (props.loading) ?  
            <>
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"                
                />
                Loading...
            </> : <>{props.text}</>
        }    
        </Button>
    );
}

export default LoadingButton;
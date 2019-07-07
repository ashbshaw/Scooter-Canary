import React from "react";
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function SearchButton() {
    return (
        <div>
            <ButtonToolbar>
                {['Warning'].map(
                    variant => (
                        <DropdownButton
                            title={variant}
                            variant={variant.toLowerCase()}
                            id={`dropdown-variants-${variant}`}
                            key={variant}
                        >
                            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                            <Dropdown.Item eventKey="3" active>
                                Active Item
                                </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </DropdownButton>
                    ),
                )}
            </ButtonToolbar>
        </div>
    );
}

export default SearchButton;
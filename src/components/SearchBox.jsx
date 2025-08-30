import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';


const SearchBox = ({ value, options, onChange }) => {
    return (
        <Autocomplete
            disablePortal
            options={options}
            value={value}
            onChange={onChange}
            slotProps={{
                listbox: {
                    style: {
                        maxHeight: 200,
                        overflow: 'auto',
                        backgroundColor: 'rgb(109, 105, 203)',
                        color: 'white'
                    }
                }
            }}
            renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                    <input
                        type='text'
                        {...params.inputProps}
                        className="select-city"
                        placeholder="Şehir seç"
                    />
                </div>
            )}
        />
    );
};


export default SearchBox;
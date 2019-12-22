import React from 'react';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { groupedOptions } from '../../../Data/DropDown/Categories';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 0,
        minWidth: 290,
        marginTop: 10,
        [theme.breakpoints.up('md')]: {
            marginTop: 0,
        },
    },
}));

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const formatGroupLabel = data => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
);

export default function CountrySelector(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [single, setSingle] = React.useState(null);

    function handleChangeSingle(value) {
        setSingle(value);
        props.getCountry(value);
    }

    return (
        <div className={classes.root}>
            {props.origin !== 'MobileSearchBarMenu' ? <Select
                inputId="react-select-single"
                styles={{
                    control: styles => ({
                        ...styles,
                        height: 47,
                        backgroundColor: '#f0f0f0',
                        color: 'black',
                        '&:hover': {
                            border: "1px solid white"
                        },
                    }),
                    container: styles => ({
                        ...styles,
                        backgroundColor: '#f0f0f0',
                        color: 'black',
                        '&:focus': {
                            border: "1px solid white"
                        },
                    }),
                    input: styles => ({ ...styles, marginLeft: theme.spacing(2), }),
                    placeholder: styles => ({ ...styles, marginLeft: theme.spacing(2) }),
                }}
                TextFieldProps={{
                    label: 'Category',
                    InputLabelProps: {
                        htmlFor: 'react-select-single',
                        shrink: true,
                    },
                }}
                placeholder="Choose a Category"
                formatGroupLabel={formatGroupLabel}
                options={groupedOptions}
                value={single}
                onChange={handleChangeSingle}
            /> :
                <Select
                    inputId="react-select-single"
                    styles={{
                        control: styles => ({
                            ...styles,
                            color: 'black',
                            '&:hover': {
                                border: "1px solid rgb(255,0,131)"
                            },
                        }),
                        container: styles => ({
                            ...styles,
                            color: 'black',
                            '&:focus': {
                                border: "1px solid rgb(255,0,131)"
                            },
                            width: '90%'
                        }),
                        input: styles => ({ ...styles, marginLeft: theme.spacing(2), }),
                        placeholder: styles => ({ ...styles, marginLeft: theme.spacing(2) }),
                    }}
                    TextFieldProps={{
                        label: 'Category',
                        InputLabelProps: {
                            htmlFor: 'react-select-single',
                            shrink: true,
                        },
                    }}
                    placeholder="Choose a Category"
                    formatGroupLabel={formatGroupLabel}
                    options={groupedOptions}
                    value={single}
                    onChange={handleChangeSingle}
                />
            }

        </div>
    );
}

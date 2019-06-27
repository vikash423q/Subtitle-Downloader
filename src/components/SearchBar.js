import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = {
    grid: {
        marginRight: 8,
        marginTop: 12,
        marginBottom: 4,
    },
    paper: {
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        height: 500
    },
    container: {

        display: 'flex',
        flexWrap: 'no-wrap',
        margin: 10
    },
    margin: {
        margin: 5
    },
    button: {
        padding: 10,
        marginTop: 10
    }
}


const SearchBar = (props) => {
    const { classes } = props;
    const [state, setstate] = useState({ selected: 'movie', searchText: null });

    return (
        <Grid container spacing={3} className={classes.grid}>
            <Grid item xs={2}>
                <FormControl className={classes.container}>
                    <InputLabel htmlFor="type">Type</InputLabel>
                    <Select
                        name="type"
                        value={state.selected}
                        onChange={(e) => setstate({ selected: e.target.value, searchText: state.searchText })}>
                        <MenuItem value='movie'>Movie</MenuItem>
                        <MenuItem value='series'>Series</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={7}>
                <FormGroup>

                    <TextField
                        id="outlined-full-width"
                        label="Search"
                        style={{ margin: 4 }}
                        placeholder={`Search for ${state.selected}`}
                        value={state.searchText}
                        onChange={(e) => setstate({ searchText: e.target.value, selected: state.selected })}
                        fullWidth
                        margin="10px"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" color="primary" size="large"
                    onClick={() => props.click(state.selected, state.searchText)}
                    className={classes.button}>Search</Button>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(SearchBar);
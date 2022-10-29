import React, {useEffect, useState} from "react";
import {Grid, Paper, Box, Typography, Card, CardContent, CardMedia} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { appSelector, appActions } from '../../redux/appRedux';
import api, {IMG_URL} from "../../services/api";
import POKE_IMG from '../../assets/images/poke.png'



const FetchList = () => {
    const [pokemons, setPokemons] = useState(null)
    const [next, setNext] = useState(null)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(appActions.setPageTitle('LISTA TAREAS'))
        getPokemons()
    },[])

    const getPokemons = async () => {
        try {
            // dispatch(appActions.loading(true))
            const result = await api.GET(api.pokemons)
            if (result) {
                console.log('poke: ', result)
                setPokemons(result.results)
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }


    const loadMore = async () => {
        try {
            // dispatch(appActions.loading(true))
            const result = await api.GET(next)
            if (result) {
                console.log('poke: ', result)
                setPokemons([...pokemons, ...result.results])
                setNext(result.next)
            }
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(appActions.loading(false))
        }
    }

    const getPokemonImgId = (id) => {
        console.log('long. ' + id.length)
        switch (id.length) {
            case 1:
                return `00${id}`
            case 2:
                return `0${id}`
            default:
                return id
        }
    }


    const renderItem = (item) => {
        const path = item.url.split('/')
        const imgID = getPokemonImgId(path[6])
        return (
            <Card p={2} sx={{
                display: 'flex', height: 100, cursor: 'pointer',
                '&:hover': { backgroundColor: '#5acdbd', color: 'white' }
            }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        N° {path[6]}
                    </Typography>
                    <Typography component="div" variant="h5">
                        {item.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 100 }}
                    src={`${IMG_URL}${imgID}.png`}
                    alt="Live from space album cover"
                />
            </Card>
        )
    }



    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography component="div" variant="h5">
                    Mi Pokedex
                </Typography>
            </Grid>
            {
                pokemons && pokemons.map((p, index) => {
                    return (
                        <Grid item xs={4} key={index}>
                            {renderItem(p)}
                        </Grid>
                    )
                })
            }

            {/* BOTON PARA RENDERIZAR MAS POKEMONES */}

            <Grid item xs={4} >
                <Card p={2} sx={{
                    display: 'flex', height: 100, cursor: 'pointer',
                    backgroundColor: '#317b52', '&:hover': { backgroundColor: '#5acdbd' }
                }}
                    onClick={() => loadMore()}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5" sx={{ color: 'white' }}>
                            Cargar Más
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 100, p: 2 }}
                        image={POKE_IMG}
                        alt="Live from space album cover"
                    />
                </Card>
            </Grid>
        </Grid>
    )
};
export default FetchList;
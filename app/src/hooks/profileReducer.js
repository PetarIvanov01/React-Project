import { useReducer } from 'react'

const initialStateValue = {
    username: '',
    aboutMe: '',
    categories: [],
    avatar: ''
};

const ACTION_TYPE = {
    USERNAME: 'username',
    ABOUTME: 'aboutMe',
    CATEGORY: 'category',
    AVATAR: 'avatar',
    EDITFORM: 'editform'
};

function reducer(state, action) {

    switch (action.type) {
        case ACTION_TYPE.USERNAME:
            return { ...state, username: action.payload };

        case ACTION_TYPE.ABOUTME:
            return { ...state, aboutMe: action.payload };

        case ACTION_TYPE.CATEGORY:
            return { ...state, categories: action.payload };

        case ACTION_TYPE.AVATAR:
            return { ...state, avatar: action.payload };

        case ACTION_TYPE.EDITFORM:
            return { ...state, ...action.payload };
            
        default:
            return state;
    }
}

export default function useProfileState() {

    const [state, dispatch] = useReducer(reducer, initialStateValue);

    const setUsername = (e) => {
        dispatch({ type: ACTION_TYPE.USERNAME, payload: e.target.value });
    };

    const setAboutMe = (e) => {
        dispatch({ type: ACTION_TYPE.ABOUTME, payload: e.target.value });
    };

    const toggleCategory = (e) => {

        let categories = [];
        const checkboxName = e.target.value;

        if (state.categories.length >= 1) {
            e.target.checked = false;
            categories = state.categories.filter((name) => name !== checkboxName);
        }
        else {
            categories = [...state.categories, checkboxName]
        }

        return dispatch({ type: ACTION_TYPE.CATEGORY, payload: categories });

    };

    const chooseAvatar = (selected) => {
        dispatch({ type: ACTION_TYPE.AVATAR, payload: selected })
    }

    return {
        chooseAvatar,
        setAboutMe,
        setUsername,
        toggleCategory,
        handleEditForm: dispatch,
        state
    }
}
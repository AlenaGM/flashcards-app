import { makeAutoObservable, runInAction } from 'mobx';

const getWords = () =>
    fetch(`itgirlschool/api/words`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((response) => response);

export default class WordStore {
    words = [];
    isLoading = false;
    isLoaded = false;
    errors = false;
    currentpage = 1;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return;
        }
        this.isLoading = true;
        const result = await getWords().catch((errors) => (this.setError(errors)));

        runInAction(() => {
            this.words = result;
            this.isLoading = false;
            this.isLoaded = true;
        });
    };

    addWords = async (word) => {
        await fetch(`itgirlschool/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((errors) => (this.setError(errors)));

        runInAction(() => {
            this.loadData();
        });
    };

    deleteWords = async (id) => {
        await fetch(`itgirlschool/api/words/${id}/delete`, {
            method: 'POST',
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((errors) => (this.setError(errors)));

        runInAction(() => {
            this.loadData();
        });
    };

    editWords = async (word) => {
        await fetch(`itgirlschool/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .catch((errors) => (this.setError(errors)));

        runInAction(() => {
            this.loadData();
        });
    };
}


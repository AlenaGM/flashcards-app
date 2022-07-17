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
    loading = true;
    errors = false;
    currentpage = 1;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        try {const result = await getWords();
            runInAction(() => {
                this.words = result;
            });
        }
        catch(errors){
            runInAction(() => {
                this.words = [];
                this.errors = true;
            });
        }
        finally{
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    addWords = async (word) => {
        await fetch(`itgirlschool/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(() => {
                runInAction(() => {
                    this.errors = true;
                })
            })
            .finally(() => {
                runInAction(() => {
                    this.loadData();
                })
            })
    };


    deleteWords = async (id) => {
        await fetch(`itgirlschool/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then(() => {
                getWords();
            })
            .catch(() => {
                runInAction(() => {
                    this.errors = true;
                })
            })
            .finally(() => {
                runInAction(() => {
                    this.loadData();
                })
            })
    };

    editWords = async (word) => {
        await fetch(`itgirlschool/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(() => {
                runInAction(() => {
                    this.errors = true;
                })
            })
            .finally(() => {
                runInAction(() => {
                    this.loadData();
                })
            })
    };
}
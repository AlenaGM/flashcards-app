import { makeAutoObservable, runInAction } from 'mobx';

const getWords = () =>
    fetch('itgirlschool/api/words')
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            console.log("Ошибка: не получили слова");
        })
        .then((response) => response);

export default class WordStore {

    words = [];
    isLoading = false;
    isLoaded = false;
    error = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadData = async () => {
        if (this.isLoaded || this.isLoading) {
            return;
        }
        this.isLoading = true;
        const result = await getWords().catch(console.log('Не загрузили данные'));

        runInAction(() => {
            this.words = result;
            this.isLoading = false;
            this.isLoaded = false;
        });
    };

    addWords = async (word) => {
        await fetch(`itgirlschool/api/words/add`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(('Ошибка: слова не добавились'));

        runInAction(() => {
            this.loadData();
        });
    };

    editWords = async (word) => {
        await fetch(`itgirlschool/api/words/${word.id}/update`, {
            method: 'POST',
            body: JSON.stringify(word),
        })
            .then(() => {
                getWords();
            })
            .catch(('Ошибка: слова не отредактировались'));

        runInAction(() => {
            this.loadData();
        });
    }

    deleteWords = async (id) => {
        await fetch(`itgirlschool/api/words/${id}/delete`, {
            method: 'POST',
        })
            .then(() => {
                getWords();
            })
            .catch(('Ошибка: слова не удалились'));

            runInAction(() => {
                this.loadData();
            });
        };
    };
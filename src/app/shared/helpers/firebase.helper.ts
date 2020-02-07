import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { FirebaseDatabaseService } from '../services/firebase.service';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class FirebaseHelper {
    constructor(private db: FirebaseDatabaseService, public loadingController: LoadingController) { }

    getByIndex(data = [], index: string, value: string | number) {
        return data.filter(item => item[index] == value);
    }

    async getPage({ hierarchy, order }) {
        const loading = await this.loadingController.create({
            message: 'Carregando',
        });

        await loading.present();

        let subject = new Subject<string>();

        this.db.list('pages').pipe(take(1)).subscribe(
            item => {
                let page = this.getByIndex(item, 'hierarchy', hierarchy);
                page = this.getByIndex(item, 'order', order);
                const result = (page.length) ? page[0] : null;
                subject.next(result);

            }, (error) => {

            }, () => {
                loading.dismiss()
            })
        return subject.asObservable();
    }
} 
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FirebaseDatabaseService {
    constructor(private db: AngularFireDatabase) { }

    delete(collection: string, key: string) {
        this.db.list(collection).remove(key)
    }

    edit(collection: string, key: string, data: any) {
        this.db.list(collection).update(key, data)
    }

    insert(collection: string, data: any): void {
        this.db.list(collection).push(data);
    }

    list(collection: string): Observable<any> {
        return this.db.list(collection).snapshotChanges()
            .pipe(map(items => {
                return items.map(item => {
                    return Object.assign({ key: item.payload.key }, item.payload.val())
                });
            }));
    }
} 
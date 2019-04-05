import { db } from './../../config/firebase'
import { getContentByID } from './contentfulactions'

export function getNewEvents(callback) {
    db.ref('Eventlog/Mirror')
        .orderByChild('@timestamp')
        .startAt(getCurrentISOTime())
        .on('child_added', snapshot => {
            const eventLog = snapshot.val()

            if (eventLog.event === 'Entry') {
                getContentByID(
                    eventLog.tagId,
                    data => {
                        callback(data, 'Entry')
                    })
            } else {
                data = { id: eventLog.tagId }
                callback(data, 'Exit')
            }
        })
}

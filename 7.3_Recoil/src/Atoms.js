import {atom , selector} from 'recoil'

export const networkAtom = atom({
    key : "networkAtom",
    default : 102
})

export const JobsAtom = atom({
    key : "JobsAtom",
    default : 0
})
export const messagingAtom = atom({
    key : "messagingAtom",
    default : 0
})
export const NotificationAtom = atom({
    key : "NotificationAtom",
    default : 12
})

export const NotificationSelector = selector({
    key : "NotificationSelector",
    get : ( {get}) => {
        const NotificationCount = get(NotificationAtom);
        const networkCount = get(networkAtom);
        const JobsCount = get(JobsAtom);
        const messagingCount = get(messagingAtom);

        return NotificationCount + networkCount + JobsCount + messagingCount
    }
})
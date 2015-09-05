/**
 * Created by Ankur on 9/5/2015.
 */
if(Notes.find().count()==0) {
    Notes.insert(
        {
            text: "Hello world!",
            contact: "ankur@420blaze.it",
            createdAt: new Date()
        }
    );
}
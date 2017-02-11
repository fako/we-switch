import {Injectable} from '@angular/core';

@Injectable()
export class AdvertisementService {

    public static getAdvertisement() {
        return {
            "id": 268851,
            "seller": {
                "id": 2,
                "profile_avatar": "https://s3-eu-central-1.amazonaws.com/sabs-images/UP_20170210_090322.png",
                "first_name": "Pepijn",
                "city": "Utrecht",
                "lon": 52.085567,
                "lat": 5.08164469999997,
                "bank_account_verified": true,
                "email_verified": true,
                "phone_verified": true,
                "facebook_verified": true,
                "facebook_friends": null,
                "google_verified": false,
                "politie_verified": true
            },
            "state": "published",
            "date_created": "2016-05-20T23:00:00",
            "stat_likes": 0,
            "stat_views": 4,
            "rating": 0,
            "title": "Glastron Mx175 (bj 2007)",
            "description": "Glastron mx175 type: sportboot bouwjaar: 2007 merk motor: volvo penta sx 3.0 aantal cilinders: 4 topsnelheid: 72 km/u afmetingen (lxb): 520 x 220 cm rompmateriaal: polyester ligplaats: veenendaal opties en accessoires  brandblusser hekdrive lenspomp navigatieverlichting  mooie en goed onderhouden glastron…",
            "price": 149.50,  // decided to go with float as Angular2 has standard components to work with them
            "lon": 4.696,  // ignored this but http://leafletjs.com/ seems a good library for it
            "lat": 51.934,  // ignored this but http://leafletjs.com/ seems a good library for it
            "hsl_colour": {
                "l": 62,
                "s": 3,
                "h": 40
            },
            "image_key": "https://s3.eu-central-1.amazonaws.com/sabs-backend/media/268851_20160611163336_medium",  // ignored this took array below
            "category": "Watersport",
            "group": 2,
            "fb_share": false,
            "fb_message": null,
            "attributes": [{
                "att_id": 2,
                "name": "Conditie",
                "icon": "pulse-strong",
                "type": "single",
                "possible_values": ["Versleten", "Gebruikt", "Zo goed als nieuw"],
                "selected_values": ["Versleten"]
            }, {
                "att_id": 6,
                "name": "Maat",
                "icon": "arrow-resize",
                "type": "slider",
                "possible_values": [30, 50, 1],
                "selected_values": [42]
            }, {
                "att_id": 4,
                "name": "Merk",
                "icon": "film-outline",
                "type": "multi",
                "possible_values": ["Mercedes", "Nike", "Philips"],
                "selected_values": ["Nike", "Mercedes"]
            }, {
                "att_id": 5,
                "name": "Geschikt voor",
                "icon": "transgender",
                "type": "multi",
                "possible_values": ["Man", "Vrouw", "Transgender"],
                "selected_values": ["Vrouw", "Man"]
            }],
            "images": [{
                "id": 535129,
                "file_key": "https://s3.eu-central-1.amazonaws.com/sabs-backend/media/268851_20160611163336_medium"
            }, {
                "id": 535130,  // this image is screwed
                "file_key": "https://s3.eu-central-1.amazonaws.com/sabs-backend/media/268851_20160611163337_medium"
            }],
            "comments": []
        }
    }

}

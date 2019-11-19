const app = new Vue({
	el: '#app',
	//SOURCE OF TRUTH
	data:{
		events: [],
		eventTypes: [
			{ label: "Wedding", value: "wedding"},
			{ label: "Bar Mitzva", value: "barMitzva" },
			{ label: "Kumzitz", value: "kumzitz" },
			{ label: "Simchas Beis Hashoeiva", value: "simchasBeisHashoeiva" },
			{ label: "Hachnasas Sefer Torah", value: "hachnasasSeferTorah" },
			{ label: "Melava Malka", value: "melavaMalka" },
			{ label: "Ze rest of ze songs", value: "" },
					],
		songs:[
			 {
			   "title": "Hakol MinHashamyim - Atzom et haeinayim - Ani Yodea - ani kattan ken ani katan ",
			   "Artist": "Mordechai Shapiro",
			   "Album-Year Released": "Hakol Min Hashemayim",
			   "Tempo": 120,
			   "Use For": "Horah",
			   "Notes": "",
			   "Event type": "",
			   "Audience":""
			 },
			 {
			   "title": "Vizakeini",
			   "Artist": "Baruch Levine",
			   "Album-Year Released": "",
			   "Tempo": 60,
			   "Use For": "Ballad 8 beat",
			   "Notes": "",
			   "Event type": "",
			   "Audience":""
			 },
			 {
			   "title": "Tefilat Kallah - Ribbono Shel Olam, Tizakenu",
			   "Artist": "Yaakov Shwekey",
			   "Album-Year Released": "Kolot",
			   "Tempo": 60,
			   "Use For": "Ballad 8 beat",
			   "Notes": "",
			   "Event type": "wedding",
			   "Audience":""
			 },
			 {
			   "title": "Lakol Zman - Aval Halayla Hazeh - Eit Rikod",
			   "Artist": "Yaakov Shwekey",
			   "Album-Year Released": "Kolot",
			   "Tempo": 120,
			   "Use For": "Horah",
			   "Notes": "",
			   "Event type": "",
			   "Audience":""
			 },
			 {
			   "title": "Visomachta Bichagecha",
			   "Artist": "Traditional",
			   "Album-Year Released": "",
			   "Tempo": 160,
			   "Use For": "Freilich",
			   "Notes": "",
			   "Event type": "simchasBeisHashoeiva",
			   "Audience":""
			 },
			 {
			   "title": "Hamavdil",
			   "Artist": "Traditional",
			   "Album-Year Released": "",
			   "Tempo": 70,
			   "Use For": "Ballad 6/8",
			   "Notes": "",
			   "Event type": "melavaMalka",
			   "Audience":""
			 }

		]

	},
	 // COMPUTED SOUCE OF TRUTH
	 computed: {
		songListForEvents: function () {
			return this.songs.filter((song) => {
				return this.events.indexOf(song["Event type"]) != -1;
			})
		},
		sortedEventTypes: function() {
			return this.eventTypes.sort(function(a,b) {
				if (a.label[0] < b.label[0]) {
					return -1
				}

				if (a.label[0] > b.label[0]) {
					return 1
				}

				return 0
			})
		}
	
	}

});
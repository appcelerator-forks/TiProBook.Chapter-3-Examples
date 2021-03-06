exports.definition = {
	config: {
		columns: {
			"storeID" :"real",
		    	"storeName": "text",
		    	"address": "text",
		    	"city" : "text",
		    	"phone": "text",
		    	"hours": "text",
		    	"countryCode" : "text"
		},
		adapter: {
			type: "sql",
			idAttribute: "storeID",
			collection_name: "store"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});
		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
	        removeAll : function() {
	            var collection = this;	
	            var sql = "DELETE FROM " + collection.config.adapter.collection_name;
	            var db = Ti.Database.open(collection.config.adapter.db_name);
	            db.execute(sql);
	            db.close();
	            collection.trigger('sync');
	        }
		});
		return Collection;
	}
};

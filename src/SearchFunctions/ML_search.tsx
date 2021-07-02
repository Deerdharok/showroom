import axios from 'axios';
import {item_properties,search_filters} from './Scrollitems'



//  search_results["p1"] = { item_thumbnail: "F1", item_title: "L1" };

const searchit = async (search:search_filters) => {
  try {
    return await axios.get('https://api.mercadolibre.com/sites/MLM/search?q='+search.keywords+'&sort='+search.sort)
  } catch (error) {
    console.error(error)
  }
}
export const search_Mercado_Libre = async (search:search_filters) => {
  const query = await searchit(search);
  if (query) {
    var res=format_table(query.data.results);
    return(res);
  }
}

const format_table = (results:any) => {
  var search_results: { [id: number] : item_properties; } = {};
  for (let i = 0; i < results.length; i++) {
    search_results[i] =  {
      item_thumbnail: results[i].thumbnail,
      item_title: results[i].title,
      item_price: results[i].price,
      item_link: results[i].permalink,
      item_site: "Mercadolibre.com"
    }
  }
  return search_results;
}
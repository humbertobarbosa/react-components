import axios from "axios";
import {useEffect, useState, useContext} from "react";
import { useRouter } from "next/router";
import * as Icon from "phosphor-react"


import { Page } from "../../../../../components/Page";
import CardCategory from "../../../../../components/CardCategory";
//import { useParams } from "react-router-dom";

import { RoutesContext } from "../../../../../Contexts/RouteContext";

import { getCategory, getAllSubcategories, listSubcategories, category} from "../../../../../Utils/server/getInfo"


export async function getStaticProps () {

  let listCategories = [];
  const baseURL = "http://172.27.12.171:3333";
  const data = await axios.get( `http://172.27.12.171:3333/servicebook/group/${idCategory}/subgroup` ).then( ( response ) => {
    const teste = response.data;
  } );

  return {
    props: { teste, },
  };

}

const Subcategory = ( paramsId ) => {


  
  const router = useRouter()

  useEffect( () => {
    getCategory( router.query.subgroupId );
    getAllSubcategories( router.query.subgroupId );

  }, [] )


//get server render


  return (
		<Page
			pagetitle={"Subcategorias"}
			contentpage={
				<>
					<h4 className="text-4xl m-15 font-semibold mb-9 text-light-bg">
						Subcategorias
					</h4>

          <h5 className="text-xl font-bold m-8">{category.description}</h5>
					<div className="lg:w-[59.5rem] m-15 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-x-10  gap-y-6 mt-0">
					
					

            { paramsId.map( ( subcategory ) => {
                
                return (
                  
                    <CardCategory link={ `/privateroutes/servicebook/subgroup/${ subcategory.id }/getAllServices` } Name={ subcategory.description } Icon={ <Icon.Archive size={ 27 }/> }
                      key={ subcategory.id }
                      idCategory={ subcategory.id }
                    />

                );
              } ) 
              
            }

					


						
						{/*
            
            criar mais categorias dessa no serviceMod
            
            <CardCategory
							link="/ListServices"
							Name={ "Sistemas" }
							Icon={ <Icon.Cpu size={ 27 } /> } idCategory={ "" }						/>
						<CardCategory
							link="/ListServices"
							Name={ "Manutenção" }
							Icon={ <Icon.Wrench size={ 27 } /> } idCategory={ "" }						/>*/}
						{/*</div>*/}

						{/*<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Administrativo</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"DCE"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.FileText size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Coordenação"}
								Icon={<Icon.Wrench size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"Financeiro"}
								Icon={<Icon.User size={27} />}
							/>
						</div>

						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">Biblioteca</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.BookOpen size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"CRCA"}
								Icon={<Icon.Users size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.User size={27} />}
							/>
						</div>
						<div className="flex flex-col gap-4 ">
							<h5 className="text-xl font-bold">GAE</h5>
							<CardCategory
								link="/ServiceLetter"
								Name={"NAE"}
								Icon={<Icon.CrosshairSimple size={27} />}
							/>
							<CardCategory
								link="/ServiceLetter"
								Name={"DAP"}
								Icon={<Icon.Stack size={27} />}
							/>
						</div>*/}
					</div>
				</>
			}
		/>
	);
}
 
export default Subcategory;

export function getCategories () {
  const list = getAllCategories();

  return list.map( ( idCategory ) => {
    return {
      params: {
        subgroupId: idCategory.id
      },
    };
  } );
}

export async function getStaticPaths () {
  const paths = getCategories();
  return {
    paths,
    fallback: false
  }
}
export async function getStaticProps ({params}) {
  const paramsId = Subcategory(params);
  return {
    props: {
      paramsId,
    },
 
  }
}


//let meuarray = []
//export async function getStaticProps( { params } ) {
//   console.log(params)
//   const api = await  axios({
//                method: 'get',
//                baseURL: baseURL,
//                url: `/servicebook/group/${params.id}/subgroup`,
//
//  } ) 
//    .then( response => {
//      meuarray = response.data;
//      return meuarray.json()
//
//    } )
//}
//
//export async function getStaticPaths () {
//
//  return {
//    paths: [
//      listSubcategories.map( item => {
//        return (
//          { params: { id: `${ item.id }`, }, },
//
//        );
//      }
//    ],
//    fallback: false,
//    
//    
//  };
//}
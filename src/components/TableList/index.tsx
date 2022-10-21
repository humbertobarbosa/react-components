
import { Link } from "react-router-dom";
import {PencilSimpleLine } from "phosphor-react";
import ButtonMainWithIcon from "../ButtonMainWithIcon";


import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Text,
	Box,
	Checkbox,
} from "@chakra-ui/react";


import PaginationTable from '../PaginationTable'
import TableOptions from "./TableOptions";
import { FiMoreVertical } from "react-icons/fi";
interface TableProps {
	itemList: Array<any>
}

function TableList(props: TableProps) {

	return (
		<>
			<div className="lg:bg-branco-100 p-4 lg:m-[4.5rem] rounded-lg h-[41rem]">
				<TableOptions />

				<div className="h-[26.375rem] overflow-y-auto">
					<Table colorScheme="whiteAlpha" className="relative">
						<Thead className="border-b-2 border-cinza-texto  hidden lg:none ">
							<Th px={["4", "4", "6"]} className="text-cinza-texto " width="8">
								<Checkbox
									className="border-cinza-texto"
									colorScheme="gray"
								></Checkbox>
							</Th>

							<Th className="">Usuário</Th>
							{<Th>Data de Cadastro</Th>}
							<Th w="6">Ações</Th>
						</Thead>

						<Tbody className="scroll max-w-full ">
							{props.itemList.map(user => {
								return (
									<div className=" rounded-[0.75rem] lg:rounded-0 bg-branco-gelo my-3 lg:my-0 flex flex-col lg:flex-row mx-6">
										<Tr
											className="lg:border-b-2 lg:border-cinza-texto  lg:bg-branco-100   lg:flex flex-row w-full justify-between items-center"
											key={user.name}
										>
											<div className="flex flex-start min-w-[33.33%]">
												<Td px={["4", "4", "6"]} className="">
													<Checkbox
														className="border-cinza-texto"
														colorScheme="gray"
													></Checkbox>
												</Td>
												<Td>
													<Box key={user.name}>
														<Link to="#">
															<Text
																fontWeight="bold"
																className="text-azul-ufal"
															>
																{user.name}
															</Text>
														</Link>
														<Text fontSize="sm" className="text-cinza-texto">
															{user.email}
														</Text>
													</Box>
												</Td>
												<div>
													
												</div>
												<ButtonMainWithIcon
													classname="lg:hidden items-center px-2 py-2 ml-5 mt-4 bg-transparent text-fundo-claro rounded-md"
													icon={
														<FiMoreVertical
															className=""
															size={18}
														/>
													}
													title=""
												/>
											</div>
											{/*<div className="max-w-[33.33%] flex flex-row justify-around">*/}
											<Td className="text-fundo-claro text-xs lg:text-base">
												{user.date}
											</Td>
											{/*</div>*/}

											<ButtonMainWithIcon
												classname="lg:flex hidden items-center px-[0.625rem] py-2 m-6 bg-cinza-texto text-branco-100 rounded-md filter shadow-sombra-botao font-bold text-base "
												icon={
													<PencilSimpleLine
														className="mr-3"
														weight="bold"
														size={20}
													/>
												}
												title="Editar"
											/>
										</Tr>
									</div>
								);
							})}
						</Tbody>
					</Table>
				</div>
				<PaginationTable />
			</div>
		</>
	);
}

export default TableList;

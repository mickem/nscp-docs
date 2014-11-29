cmake_minimum_required(VERSION 2.6)

PROJECT(build_docs)

IF(SPHINX_FOUND)

	if(NOT DEFINED SPHINX_THEME)
		set(SPHINX_THEME default)
	endif()
	if(NOT DEFINED SPHINX_THEME_DIR)
		set(SPHINX_THEME_DIR)
	endif()

	ADD_CUSTOM_TARGET(build_docs_html ALL
		${SPHINX_EXECUTABLE}
		-q -b html
		-d "${CMAKE_CURRENT_BINARY_DIR}/_cache"
		"${CMAKE_CURRENT_SOURCE_DIR}"
		"${CMAKE_CURRENT_BINARY_DIR}/html"
		COMMENT "Building HTML documentation with Sphinx")
	ADD_DEPENDENCIES(build_docs_html generate_doc_sources)

#	ADD_CUSTOM_TARGET(build_docs_pdf ALL
#		${SPHINX_EXECUTABLE}
#		-q -b pdf
#		-d "${CMAKE_CURRENT_BINARY_DIR}/_cache"
#		"${CMAKE_CURRENT_SOURCE_DIR}"
#		"${BUILD_TARGET_EXE_PATH}"
#		COMMENT "Building PDF documentation with Sphinx")
#	ADD_DEPENDENCIES(build_docs_pdf generate_doc_sources)

	SET_TARGET_PROPERTIES(build_docs_html PROPERTIES FOLDER "docs")
	install(DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}/html/" DESTINATION "${INSTALL_FILES_BASE}web/help")
#	SET_TARGET_PROPERTIES(build_docs_pdf PROPERTIES FOLDER "docs")
ELSE(SPHINX_FOUND)
	MESSAGE(STATUS "Sphinx not foun: No documentation will be built")
ENDIF(SPHINX_FOUND)

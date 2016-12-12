cmake_minimum_required(VERSION 2.6)

PROJECT(build_docs)

IF(MKDOCS_FOUND)

	ADD_CUSTOM_TARGET(build_docs_html ALL
		${MKDOCS_EXECUTABLE}
		build
		--site-dir "${CMAKE_CURRENT_BINARY_DIR}/html"
		WORKING_DIRECTORY "${CMAKE_CURRENT_SOURCE_DIR}"
		COMMENT "Building HTML documentation")
	ADD_DEPENDENCIES(build_docs_html generate_doc_sources)

	SET_TARGET_PROPERTIES(build_docs_html PROPERTIES FOLDER "docs")
	install(DIRECTORY "${CMAKE_CURRENT_BINARY_DIR}/html/" DESTINATION "${INSTALL_FILES_BASE}web/help")
ELSE(MKDOCS_FOUND)
	MESSAGE(STATUS "mkdocs not found: No documentation will be built")
ENDIF(MKDOCS_FOUND)

import styled from "styled-components"
import tags from "./tags.json"

const TagsContainer = styled.div`
    display: flex;
    gap: 24px;
`

const ButtonTag = styled.button`
    background-color: #94A3B8;
    border-radius: 10px;
    padding: 8px 10px;
    font-size: 24px;
    color: white;
    border: 2px solid #94A3B8; 
    box-sizing: border-box;
    &:hover{
        border: 2px solid #C98CF1;
    }
`

const TagTitulo = styled.h3`
    color: white;
    font-size: 24px;
`


const Tags = () => {
    return <TagsContainer>
        <TagTitulo>Busque por tags: </TagTitulo>

        {tags.map(tag => {
            return <ButtonTag key={tag.id}>{tag.titulo}</ButtonTag>
        })}
    </TagsContainer>
        
}

export default Tags


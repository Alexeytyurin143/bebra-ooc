import React from 'react'

const UISelect = ({posts, defaultOption, onChange, value }) => {
    return (
        <select value={value} onChange={onChange}>
            <option disabled value="">{defaultOption}</option>
            {posts.map(post =>
                <option key={post.buildingObjectType} value={post.buildingObjectType}>
                    {post.buildingObjectType}
                </option>
            )}
        </select>
    )
}

export default UISelect
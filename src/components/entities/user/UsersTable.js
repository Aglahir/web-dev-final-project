/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react"
import { Table, Space, Tag } from "antd"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { getUserTypeName } from "../../../utils"

const StyledTable = styled(Table)`
  max-height: 100vh;
`

const UsersTable = ({ users, editAction, deleteAction }) => {
  const { t, i18n } = useTranslation()
  const getColumns = () => {
    return [
      {
        title: t("Fullname"),
        dataIndex: "full_name",
        key: "full_name",
      },
      {
        title: t("Username"),
        dataIndex: "user_name",
        key: "user_name",
      },
      {
        title: t("User Type"),
        dataIndex: "user_type",
        key: "user_type",
        render: (user_type) => getUserTypeName(user_type),
      },
      {
        title: t("Areas"),
        key: "tags",
        dataIndex: "tags",
        render: (tags, user) => (
          <>
            {tags &&
              tags.map((tag) => {
                const uniqueKey = `${user._id}-${tag._id}`
                return (
                  <Tag color="geekblue" key={uniqueKey}>
                    {tag.tag_name}
                  </Tag>
                )
              })}
          </>
        ),
      },
      {
        title: t("Color"),
        dataIndex: "color",
        key: "color",
      },
      {
        title: t("Action"),
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <a
              onClick={() => {
                editAction(record)
              }}
            >
              {t("Edit")}
            </a>
            <a
              onClick={() => {
                deleteAction(record)
              }}
            >
              {t("Delete")}
            </a>
          </Space>
        ),
      },
    ]
  }

  const columns = getColumns()

  return (
    <StyledTable
      pagination={{ pageSize: 5 }}
      columns={columns}
      dataSource={users}
      rowKey="id"
    />
  )
}

export default UsersTable

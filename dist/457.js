"use strict";(self.webpackChunkwebpack_project=self.webpackChunkwebpack_project||[]).push([[457],{3457(e,i,a){var d=a(420),l=a(9757);class n extends l.O{constructor(){super(),this.data0=[{id:1,parent_id:null,label:"CEO Office"},{id:2,parent_id:null,label:"Board of Directors"},{id:3,parent_id:1,label:"Technology Division"},{id:4,parent_id:1,label:"Operations Division"},{id:5,parent_id:1,label:"Finance Division"},{id:6,parent_id:1,label:"HR & GA Division"},{id:7,parent_id:3,label:"Software Engineering"},{id:8,parent_id:3,label:"Infrastructure & DevOps"},{id:9,parent_id:3,label:"Data & Analytics"},{id:10,parent_id:3,label:"Product Management"},{id:11,parent_id:3,label:"Quality Assurance"},{id:12,parent_id:7,label:"Frontend Team"},{id:13,parent_id:7,label:"Backend Team"},{id:14,parent_id:7,label:"Mobile Team"},{id:15,parent_id:12,label:"React Development"},{id:16,parent_id:12,label:"Vue Development"},{id:17,parent_id:12,label:"Angular Development"},{id:18,parent_id:13,label:"Node.js Services"},{id:19,parent_id:13,label:"Java Microservices"},{id:20,parent_id:13,label:"Python AI Services"},{id:21,parent_id:8,label:"Cloud Operations"},{id:22,parent_id:8,label:"Network Security"},{id:23,parent_id:8,label:"Database Administration"},{id:24,parent_id:9,label:"Data Engineering"},{id:25,parent_id:9,label:"Data Science"},{id:26,parent_id:9,label:"Business Intelligence"},{id:27,parent_id:4,label:"Supply Chain"},{id:28,parent_id:4,label:"Manufacturing"},{id:29,parent_id:4,label:"Quality Control"},{id:30,parent_id:4,label:"Logistics"},{id:31,parent_id:5,label:"Accounting"},{id:32,parent_id:5,label:"Treasury"},{id:33,parent_id:5,label:"Budgeting & Planning"},{id:34,parent_id:5,label:"Taxation"},{id:35,parent_id:6,label:"Recruitment"},{id:36,parent_id:6,label:"Training & Development"},{id:37,parent_id:6,label:"Compensation & Benefit"},{id:38,parent_id:6,label:"General Affairs"}],this.data1=[{id:1,parent_id:null,label:"CEO Office"},{id:2,parent_id:null,label:"Board of Directors"},{id:3,parent_id:1,label:"Technology Division"},{id:4,parent_id:1,label:"Operations Division"},{id:5,parent_id:1,label:"Finance Division"},{id:6,parent_id:1,label:"HR & GA Division"},{id:7,parent_id:3,label:"Software Engineering"},{id:8,parent_id:3,label:"Infrastructure & DevOps"},{id:9,parent_id:3,label:"Data & Analytics"},{id:10,parent_id:3,label:"Product Management"},{id:11,parent_id:3,label:"Quality Assurance"},{id:12,parent_id:7,label:"Frontend Team"},{id:13,parent_id:7,label:"Backend Team"},{id:14,parent_id:7,label:"Mobile Team"},{id:15,parent_id:12,label:"React Development"},{id:16,parent_id:12,label:"Vue Development"},{id:17,parent_id:12,label:"Angular Development"},{id:18,parent_id:13,label:"Node.js Services"},{id:19,parent_id:13,label:"Java Microservices"},{id:20,parent_id:13,label:"Python AI Services"},{id:21,parent_id:8,label:"Cloud Operations"},{id:22,parent_id:8,label:"Network Security"},{id:23,parent_id:8,label:"Database Administration"},{id:24,parent_id:9,label:"Data Engineering"},{id:25,parent_id:9,label:"Data Science"},{id:26,parent_id:9,label:"Business Intelligence"},{id:27,parent_id:4,label:"Supply Chain",selected:!0},{id:28,parent_id:4,label:"Manufacturing"},{id:29,parent_id:4,label:"Quality Control"},{id:30,parent_id:4,label:"Logistics"},{id:31,parent_id:5,label:"Accounting"},{id:32,parent_id:5,label:"Treasury"},{id:33,parent_id:5,label:"Budgeting & Planning"},{id:34,parent_id:5,label:"Taxation"},{id:35,parent_id:6,label:"Recruitment"},{id:36,parent_id:6,label:"Training & Development"},{id:37,parent_id:6,label:"Compensation & Benefit"},{id:38,parent_id:6,label:"General Affairs"}]}render(){return d.qy`
            <md-grid class="demo-grid">

                <md-grid-column expanded="12" medium="8" compact="4">
                    <md-grid>
                        <md-grid-column expanded="12" medium="8" compact="8">
                            <h3>Tree</h3>
                        </md-grid-column>

                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-tree
                                .items="${this.data0}"
                                .singleSelect="${!0}"
                            ></md-tree>
                        </md-grid-column>
                        <md-grid-column expanded="6" medium="4" compact="4">
                            <md-tree
                                .items="${this.data1}"
                                .singleSelect="${!0}"
                            ></md-tree>
                        </md-grid-column>
                    </md-grid>
                </md-grid-column>
                
            </md-grid>
        `}}customElements.define("demo-tree",n);const t=document.createElement("demo-tree");a.d(i,["default",0,t])}}]);